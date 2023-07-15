const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

const { recoverPublicKey, verify } = require("ethereum-cryptography/secp256k1");
const { sha256 } = require("ethereum-cryptography/sha256");
const {
  toHex,
  utf8ToBytes,
  hexToBytes,
} = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());

const balances = {
  "04456c4476b24468f56a805a635d408ce624841068e4cb075b92d4a2b2071f2771f36236b8554fed14c6f3cd565dbbacaeafd8147547f99feaf90ac9e9a2f3fba4": 100,
  "0404d6a82e7832959539962cbf4bed747ee276ebc05ba26555337ab14b8f09018fd07a8f2e8121c3c601d3a3d47a61eebc56f4be1093b6ca3c5aefc32fd684f9ee": 50,
  "042a6d5793e98ceed2dc141d3bb3de397caf4b7880968d7f3cb73eb34e3055971f8eedd03a038c25e9809254f496d9085c7f742fa79e9f6b238d40b673da14de96": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", async (req, res) => {
  const { signature, recipient, amount, recoverBit } = req.body;

  const hexSig = hexToBytes(signature);
  const message = "signature";
  const sender = toHex(
    recoverPublicKey(sha256(utf8ToBytes(message)), hexSig, recoverBit)
  );

  const isSigned = verify(hexSig, toHex(sha256(utf8ToBytes(message))), sender);

  if (!isSigned) {
    res.status(401).send({ message: "Not verified." });
  }

  setInitialBalance(sender);
  setInitialBalance(recipient);


  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

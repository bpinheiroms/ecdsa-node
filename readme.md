## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

```

Balance: 100
{
  'private-key': '1bb696ff3fae50aebee1d7f7c7100717a7d1818f0d7d7745bae240cd9639daed',
  'public-key': '04456c4476b24468f56a805a635d408ce624841068e4cb075b92d4a2b2071f2771f36236b8554fed14c6f3cd565dbbacaeafd8147547f99feaf90ac9e9a2f3fba4'
}

Balance: 50
{
  'private-key': '91f93771ff1a6701a271a54e84d2f2244bc5e76c27366e6920e8b612f673224e',
  'public-key': '0404d6a82e7832959539962cbf4bed747ee276ebc05ba26555337ab14b8f09018fd07a8f2e8121c3c601d3a3d47a61eebc56f4be1093b6ca3c5aefc32fd684f9ee'
}
Balance: 75
{
  'private-key': 'd121d5586fdca0691eb1d1e1ce3e20ea580723e71212d6a2ad0b53c821a415f0',
  'public-key': '042a6d5793e98ceed2dc141d3bb3de397caf4b7880968d7f3cb73eb34e3055971f8eedd03a038c25e9809254f496d9085c7f742fa79e9f6b238d40b673da14de96'
}

```

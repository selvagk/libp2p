import { createLibp2p } from 'libp2p'
import { webSockets } from '@libp2p/websockets'
import { webRTCStar } from '@libp2p/webrtc-star'
import { noise } from '@chainsafe/libp2p-noise'
import { mplex } from '@libp2p/mplex'
import { bootstrap } from '@libp2p/bootstrap'

document.addEventListener('DOMContentLoaded', async () => {
  const wrtcStar = webRTCStar()

  // Create our libp2p node
  const libp2p = await createLibp2p({
    addresses: {
      // Add the signaling server address, along with our PeerId to our multiaddrs list
      // libp2p will automatically attempt to dial to the signaling server so that it can
      // receive inbound connections from other peers
      listen: [
        '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
        '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star'
      ]
      // listen: ['/ip4/0.0.0.0/tcp/0/ws']
    },
    transports: [
      webSockets(),
      wrtcStar.transport
    ],
    connectionEncryption: [noise()],
    streamMuxers: [mplex()],
    peerDiscovery: [
      wrtcStar.discovery,
      bootstrap({
        list: [
          '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
          '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN'
        ]
      })
    ]
  })

  

  // UI elements
 
  

  // Listen for new peers
  libp2p.addEventListener('peer:discovery', (evt) => {
    const peer = evt.detail
     console.log(`Found peer ${peer.id.toString()}`)

    // dial them when we discover them
    libp2p.dial(evt.detail.id).catch(err => {
      console.log(`Could not dial ${evt.detail.id}`, err)
    })
  })

  // Listen for new connections to peers
  libp2p.connectionManager.addEventListener('peer:connect', (evt) => {
    const connection = evt.detail
    console.log(`Connected to ${connection.remotePeer.toString()}`)
  })

  // Listen for peers disconnecting
  libp2p.connectionManager.addEventListener('peer:disconnect', (evt) => {
    const connection = evt.detail
    consolelog(`Disconnected from ${connection.remotePeer.toString()}`);
    console.clear();
    console.log("diconnected")
  })

  console.log('libp2p started!');
  console.log(`libp2p id is ${libp2p.peerId.toString()}`);

  


  // Export libp2p to the window so you can play with the API
  window.libp2p = libp2p
})

import React, {Component} from 'react';

class Python extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Python Projects (All group based Projects)</h1>
                <h3>Predicted the contents of a UDP packet</h3>
                <p>
                    Sent UDP messages between two machines functioning as the client and server respectively.
                    <ul>
                        <li>Predictied how many bytes each field of the header would use, and what order each of the
                            header fields and
                            payload
                            message would be in.
                        </li>
                    </ul>
                </p>
                <h3>TCP client/server</h3>
                <p>
                    Designed and implemented a simple protocol over TCP.
                    <ul>
                        <li> Sent messages between machines using TCP.</li>
                        <li>Prompted the user for the network operation to preform (tcp send or tcp receive) and then
                            called the
                            selected function with appropriate argument values.
                        </li>
                        <li> Created a single TCP connection to the already-waiting server and sent multiple files to
                            the server. This
                            operation checked the single-character status received from the server and displayed it to
                            the user.
                        </li>
                        <li> Listened for a TCP connection on a specified port, received and displayed multiple messages
                            from a single
                            client over a single socket, and sent a one-character response.
                        </li>
                        <li>
                            The server saved the files with a sequential number and uploaded them. Files over the
                            previous socket
                            connections were overwritten.
                        </li>
                    </ul>
                </p>
                    <h3>Implemented an HTTP client</h3>
                    <p>
                        Wrote a program to request and save a web resource, acting as an HTTP client. Code was written
                        from scratch,
                        sending and receiving bytes over a TCP connection rather than using a prebuilt HTTP library.
                    </p>
                    <ul>
                        <li>
                            Using HTTP, requested a web resource and stored the returned data in the specified file.
                        </li>
                        <li>
                            Using HTTP, requested a web resource and stored the returned payload data in the specified
                            file.
                        </li>

                    </ul>

                    <h3>Implemented an HTTP server</h3>
                    <p>
                        Wrote a short program to respond to HTTP requests and return web resources, acting as an HTTP
                        server.
                    </p>
                    <ul>
                        <li>Sever handled file resources. Was able to service a client request by returning the contents
                            of a file
                            associated with the resource identifier.
                        </li>
                        <li>Parsed the request Request-Line and all request header lines, storing the key/value pairs in
                            a Python
                            dictionary.
                        </li>
                        <li>
                            Returned an appropriate response Status-Line and header lines to the requesting client,
                            regardless of what
                            the user typed in the URL.
                        </li>
                    </ul>

                    <h3>Implemented an TFTP server
                    </h3>
                    <p>
                        Wrote a short program for a TFTP server. The served handled requests sent from a TFTP client.
                    </p>
                    <ul>
                        <li>
                            Received a request from the client, parsed the request, and verified that it is a read
                            request.
                        </li>
                        <li>
                            Sent the data blocks to the client one by one waiting for an ack after each data message.
                        </li>
                        <li>
                            Handled error messages as well as acks for blocks that need to be retransmitted.
                        </li>
                        <li>
                            Closed the socket after successfully receiving an ack for the last block.
                        </li>
                    </ul>

                    <h3>RSA Encryption/Decryption</h3>
                    <p>
                        Created and brute-force attacked 16-bit RSA encryption.
                    </p>
                    <ul>
                        <li>
                            Created code to create and use a public and private key.
                        </li>
                        <li>
                            Provided the user with a variety of encryption-related actions.
                        </li>
                        <li>
                            Created new public keys and computed the checksum for a message then encrypted it.
                        </li>
                        <li>
                            Verified a message with its checksum, interactively.
                        </li>
                        <li>
                            Applied the key, given as a tuple to the message.
                        </li>
                        <li>
                            Broke key given the public key using Euclid's Extended Algorithym for lower Big - O.
                        </li>
                    </ul>
            </div>
        );
    }
}

export default Python;
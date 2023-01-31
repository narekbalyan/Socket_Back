import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({})
export class Gateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      this.server.emit('onConnected', `${socket.id}`);
    });
  }

  @SubscribeMessage('message')
  onMessage(@MessageBody() body: any) {
    this.server.emit('onMessage', {
      msg: 'message',
      content: body,
    });
  }
}

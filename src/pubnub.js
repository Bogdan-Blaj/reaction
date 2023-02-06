import PubNub from 'pubnub';



export const MESSAGE_CHANNEL = "MESSAGE_CHANNEL";

function PubSub() {
    const pubnub = new PubNub({
        publishKey: "pub-c-04c57878-0791-4e5e-a56c-69d0281b6886",
        subscribeKey: "sub-c-8263c516-781f-4d7e-a330-34fc725a951a",
        userId: "sec-c-NjczYTcyNGYtMTM3OC00OGRlLWJmN2UtOWUwNjZmOWVmMzYy",
      });

    pubnub.subscribe( {
        channels: [MESSAGE_CHANNEL]
    });

    this.addListener = listenerConfig => {
        pubnub.addListener(listenerConfig);
    }

    this.publish = message => {
        console.log('publish message', message);

        pubnub.publish({
            message,
            channel: MESSAGE_CHANNEL
        })
    }
}

export default PubSub;
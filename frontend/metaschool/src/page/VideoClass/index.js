import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
export default function VideoClass(props) {
    const roomID = "jjq657";
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = "userName" + userID;
    const appID = 346963384;
    const serverSecret = "f82df5f0714537aac4b52952c23d4da0";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);


    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container: document.querySelector("#video"),
        sharedLinks: [],
        scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
        },

        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        showTextChat: true,
        showUserList: true,
        maxUsers: 50,
        layout: "Sidebar",
        showLayoutButton: true,

    });
    return (
        <>
            <script src="https://unpkg.com/@zegocloud/zego-uikit-prebuilt/zego-uikit-prebuilt.js"></script>
            <div id="video">

            </div>
        </>
    )
}
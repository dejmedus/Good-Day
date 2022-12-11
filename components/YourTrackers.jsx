import Tracker from "./Tracker"

const YourTrackers = ({ session, status }) => {

    // const trackers = getTrackers(session.user.email)
    const trackers = false;

    // why doesnt this one like brackets?
    return (
        status == 'loading'
            ? <h3>loading...</h3>
            : trackers
                ? <p>map trackers here</p>
                : <p>Create a tracker!</p>
    )
}

export default YourTrackers

// async function getTrackers(email) {

//     // use unique email to find userID
//     const user = await prisma.user.findUnique({
//         where: {
//             email: email,
//         },
//     })
//     console.log(user.trackers)
//     return user.trackers;
// }

// : trackers
//     ? trackers.map(tracker => {
//         <Tracker tracker={tracker}></Tracker>
//     })
//     : <p>Create a tracker!</p>
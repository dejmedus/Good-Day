import Tracker from "./Tracker"

const YourTrackers = ({ session, status }) => {
    // console.log(trackers)

    return (
        status == 'loading'
            ? <h3>loading...</h3>
            : <h1>trackers here</h1>
        // : trackers
        //     ? <p>map trackers here</p>
        //     : <p>Create a tracker!</p>
    )
}

export default YourTrackers

// export async function getStaticProps() {

//     const email = session.user.email;
//     console.log(email)
//     // use unique email to find userID
//     const user = await prisma.user.findUnique({
//         where: {
//             email: email,
//         },
//     })
//     console.log(user.trackers)
//     const trackers = user.trackers

//     return {
//         props: { trackers }

//     }
// }

// : trackers
//     ? trackers.map(tracker => {
//         <Tracker tracker={tracker}></Tracker>
//     })
//     : <p>Create a tracker!</p>
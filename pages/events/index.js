import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const Events = ({ users }) => {
    return (
        <div>
            <h1>Events</h1>
            {users.map(user => (
                <div key={user.id}>
                    <Link href={'/events/' + user.id}>
                        <a className='single-post'>
                            <h3>{user.name}</h3>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Events

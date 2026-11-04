import {Link, useNavigate} from "react-router-dom";

function Page1() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Page 1</h1>
            <Link to="/">Back to Home</Link>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}
export default Page1

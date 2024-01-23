import { useEffect, useState } from "react"

function Card() {
    const [gitInfo, setGitInfo] = useState({})
    useEffect(() => {
        fetch(`https://api.github.com/users/Hashirnkhan24`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setGitInfo(data);
        })
    }, [])
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md p-6 bg-slate-700 text-white rounded-md shadow-md">
            <img
                src={gitInfo.avatar_url}
                alt={`Avatar of ${gitInfo.login}`}
                className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-center mb-2">{gitInfo.login}</h1>
            <p className="text-gray-200 text-center">Followers: {gitInfo.followers}</p>
        </div>
    </div>


    )
}

export default Card
import {useState} from "react";


const Search = () => {
    const [postNum, setPostNum] = useState("");
    const [list, setList] = useState([]);

    const search = ({target: {value}}) => {
        setPostNum(value);
        getData(value);
    }

    let getData = (dataNum) => {
        let intervalId = "";
        if (postNum.length > 0) {
            intervalId = setInterval(() => {
                // getDate(dataNum);
            }, 1000);
        }
        if(postNum.length === 0){
            clearInterval(intervalId)
        }
    }

    const getDate = (num) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${num}`)
            .then(response => response.json())
            .then(json => setList(json));
    }

    return (
        <div>
            <input value={postNum} onChange={search}/>
            {
                list.map((post, index) => (
                    <div key={index}>{post.name}</div>
                ))
            }
        </div>
    )
}

export default Search
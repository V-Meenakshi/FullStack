export default function Arraylist() {
    const branches=["AIML","AIDS","IT","CSE"];
    const branchesList = branches.map((branch,index) => <li key={index}>{branch}</li>)
    return(
        <div>
            <h1>List of branches</h1>
            <ul>{branchesList}</ul>
        </div>
    );
}
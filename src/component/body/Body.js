import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import "./Body.css"
function Body() {
    const [flag, setFlag] = useState(false);
    const [key, setkey] = useState("");

    const [list, setList] = useState([
        {
            Name: "eee",
            Select: "Melta",
            Points: "9",
            key: uuid(),
            idx: 0,
        },
        {
            Name: "eee",
            Select: "Melta",
            Points: "4",
            key: uuid(),
            idx: 1,
        },
        {
            Name: "eee",
            Select: "Melta",
            Points: "-2",
            key: uuid(),
            idx: 2,
        },
        {
            Name: "eee",
            Select: "Melta",
            Points: "3",
            key: uuid(),
            idx: 3,
        },
        {
            Name: "eee",
            Select: "Melta",
            Points: "1",
            key: uuid(),
            idx: 4,
        }
    ])
    const [data, setData] = useState({ Select: "Melta" });


    const AddtoList = () => {

   

        let arr = list.map((obj) => obj);
        arr.splice(0, 0, { key: uuid(), idx: 0, ...data })
        console.log("Arr =>", arr)

        arr.map((obj, idx) => {
            return (
                obj.idx = idx
            )
        })
        setList(arr)


        setData({ Name: "", Select: "Melta", Points: "", key: uuid() });

    }
    const deleteFromList = (key1) => {
        setList(list.filter((obj) => obj.key !== key1));


    }
    const EditList = (key1, idx1) => {
        setkey(key1);
        setFlag(true);
        let obj1 = list.filter((obj) => obj.key === key1);
        console.log("Edit data", obj1[0].Name);


        setData(
            {
                Name: obj1[0].Name,
                Select: obj1[0].Select,
                Points: obj1[0].Points,
                key: obj1[0].key,
                idx: obj1[0].idx



            }

        )

        console.log("DATA => ", data);
    }

    const update = (key1) => {
        let arr = list.filter((obj) => obj.key !== key1);

        setList(list.filter((obj) => obj.key !== key1));
        arr.splice(data.idx, 0, { key: key1, ...data });
        console.log("Arr => ", arr);
        arr.map((obj, idx) => {
            return (
                obj.idx = idx

            )
        })
        setList(arr);


        setData({ Name: "", Select: "Melta", Points: "", key: uuid() });
        setFlag(false);


    }








    return (
        <>

            <div className='main_sec'>
                <div className="left_body">

                    <div className="form">
                        <form action="#" style={{width : "100%"}}>


                            <h1>Add Entry</h1>
                            <div className='form_tag' >
                                <label htmlFor="">Name</label>
                                <input placeholder='Enter your name' type="text" value={data.Name} onChange={(e) => setData({ ...data, Name: e.target.value })} />
                                <label htmlFor="">Select</label>
                                <select value={data.Select} onChange={(e) => setData({ ...data, Select: e.target.value })}>
                                    <option value="Melta">Melta</option>
                                    <option value="Santra">Santra</option>
                                    <option value="Sonfee">Sonfee</option>
                                </select>
                                <label htmlFor="">Points</label>
                                <input placeholder='Give points' min="0" max="10" type="number" value={data.Points} onChange={(e) => setData({ ...data, Points: e.target.value })} />
                                <div className="btn">
                                    <button className='reset' onClick={() => setData({ Name: "", Select: "Melta", Points: "" })}> Reset</button>
                                    {flag === false ? <button className='add' onClick={AddtoList}> Add</button> :
                                        <button  className='add' onClick={() => update(data.key)} > Update</button>

                                    }
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
                <div className="right_body">
                    <div className="todoList">
                        <h1>Entries</h1>
                        <div className="drink_name">
                            <span>#1 Malta(26)</span>
                            <span>#2 Sönfee(4)</span>
                            <span>#3 Santrá(-2)</span>
                        </div>
                        <div className="col">
                            <div className="name">Name</div>
                            <div className="name">Cocktail</div>
                            <div className="name">Points Given</div>
                            <div className="name">Action</div>
                        </div>
                        <div className="rows">

                            {
                                list.map((obj) => {
                                    return (
                                        <div className="row">
                                            <div className="name">{obj.Name}</div>
                                            <div className="name">{obj.Select}</div>
                                            <div className="name">{obj.Points}</div>
                                            {
                                                flag === false ?
                                                    <div className="name action">

                                                        <button className='edit_btn' onClick={() => EditList(obj.key, obj.idx)}>Edit</button>
                                                        <button className='delete_btn' onClick={() => deleteFromList(obj.key)}>Delete</button>



                                                    </div> :
                                                    <div className="name action">

                                                        {
                                                            key === obj.key ?

                                                                <h4 style={{ backgroundColor: "transparent", color: "white" }}>Editing</h4> :
                                                                <>
                                                                    <button className='edit_btn' onClick={() => EditList(obj.key, obj.idx)}>Edit</button>
                                                                    <button className='delete_btn' onClick={() => deleteFromList(obj.key)}>Delete</button>
                                                                </>


                                                        }



                                                    </div>


                                            }
                                        </div>
                                    )
                                })
                            }



                        </div>
                    </div>
                </div>







            </div>
        </>
    )
}

export default Body;
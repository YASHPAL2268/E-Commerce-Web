// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react'

// const AddCategory = () => {
//     const [category, setCategory] = useState();


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post("http://localhost:3000/api/categories", { name: category });
//             alert("Added category Successfully");
//         }
//         catch (err) {
//             alert(err)
//         }
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Category Name :</label>
//                 <input type='text' name='categoty' onChange={((e) => setCategory(e.target.value))} /><br />
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default AddCategory




import axios from 'axios';
import React, { useState } from 'react';

const AddCategory = () => {
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!category.trim()) {
            alert("Please enter a valid category name.");
            return;
        }

        try {
            await axios.post("http://localhost:3000/api/categories", { name: category });
            alert("✅ Category added successfully");
            setCategory('');
        } catch (err) {
            console.error(err);
            alert("❌ Failed to add category");
        }
    };

    return (
        <div style={{ margin: '20px' }}>
            <h2>Add New Category</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category">Category Name:</label><br />
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter category name"
                /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddCategory;

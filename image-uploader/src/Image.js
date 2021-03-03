import React from 'react';

export const Image = () =>{
    const [displayImage, setDisplayImage] = React.useState([]);
    const [previewImage, setPreviewImage] = React.useState('');
    const handleInputChange = (event) =>{
        console.log('files', event.target.files.length);
        const files = Array(...event.target.files);
        const a = ['a','b','c'];
        files.map(data =>{
            return console.log(data);
        })
        console.log('type of', Array(...files));
        let images = [];
        for(let i=0; i< files.length; i++){
            const imgUrl = URL.createObjectURL(files[i]);
            images.push(imgUrl);
        }
        return setDisplayImage([...displayImage,...images]);
        // console.log('img blob', img);
    }
    const handleImageClick =(event) =>{
        return setPreviewImage(event.target.src);
    }
    const handleImageRemove = (event) =>{
        URL.revokeObjectURL(event.target.src);
        setPreviewImage('');
        return setDisplayImage(displayImage.filter(url => url !== event.target.src));
    }
    return(
        <div className="container">
            <h3>Hello world of images</h3>
            <form>
                <input type='file' multiple accept="image/*" onChange={handleInputChange} name='imagaFile' id='imageId' /> 
            </form>

            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>

                <div style={{width:'300px', height: 'auto', border:'2px solid red'}} title="Double click on image to remove it">
                    <section className="image">
                        {displayImage.map(imageUrl =>(
                            <img src={imageUrl} onClick={handleImageClick} onDoubleClick={handleImageRemove} alt="the uploaded img"/>
                        ))}
                    </section>
                </div>

                <div style={{width:'300px', height:'300px', border:'2px solid black'}}>
                    <img src={previewImage} alt="preview images" style={{width:"100%", height:'90%', objectFit:'contain'}}/>
                </div>

            </div>
        </div>
    )
}
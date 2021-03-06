import React from 'react';

export const Image = () =>{
    const [displayImage, setDisplayImage] = React.useState([]);
    const [previewImage, setPreviewImage] = React.useState('');
    const handleInputChange = (event) =>{
        return setDisplayImage([...displayImage,...event.target.files]);
    }
    
    const handleImageClick =(event) =>{
        return setPreviewImage(event.target.src);
    }
    const handleImageRemove = (event) =>{
        URL.revokeObjectURL(event.target.src);
        setPreviewImage('');
        return setDisplayImage(displayImage.filter((url,index) => index !== parseInt(event.target.id)));
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
                        {displayImage.map((imageUrl, index) =>{
                            const img = URL.createObjectURL(imageUrl);
                            return <img src={img} onClick={handleImageClick} onDoubleClick={handleImageRemove} id={index} alt="the uploaded img"/>
                        })}
                    </section>
                </div>

                <div style={{width:'300px', height:'300px', border:'2px solid black'}}>
                    <img src={previewImage} alt="preview images" style={{width:"100%", height:'90%', objectFit:'contain'}}/>
                </div>

            </div>
        </div>
    )
}
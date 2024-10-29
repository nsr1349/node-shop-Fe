import { Component } from "react";
import { MdAdd } from "react-icons/md";

const widgetOption = {
    cloudName : import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME,
    uploadPreset : import.meta.env.VITE_APP_CLOUDINARY_PRESET
}

class CloudinaryUploadWidget extends Component {
    componentDidMount() {
        var myWidget = window.cloudinary.createUploadWidget(widgetOption,
        (err, res) => {
            if (!err && res?.event === "success") 
                this.props.uploadImage(res.info.secure_url)
        })
        document.getElementById("upload_widget").addEventListener("click", () => myWidget.open(), false)
    }

    render() {
        return (
            <div id="upload_widget" className="h-[270px] w-48 border-2 border-sub center text-g relative hover:border-g hover:text-white transition-all">
                <MdAdd size={60}/>
                {
                    this.props.image &&                        
                    <img src={this.props.image || ''} className="absolute h-full object-cover bg-main" />
                }
            </div>
        );
    }
}

export default CloudinaryUploadWidget;
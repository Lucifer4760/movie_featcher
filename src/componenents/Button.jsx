import './button.css';
export default function Button({size, text}){

    let classNames = "login";
    if(size === "large"){
        classNames = 'login large'
    }else if(size === "small"){
        classNames = 'large small';
    }

    return (
        <button className={`${classNames}`}>{text}</button>
    )
}   
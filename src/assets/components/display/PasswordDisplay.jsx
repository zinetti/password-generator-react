function PasswordDisplay({ password }){
    return (
        <div style={{marginTop: "1rem",marginBottom: "1rem" ,fontSize: "1.2rem", fontWeight: "bold"}}>
            { password || "Click para gerar uma senha"}
        </div>
    )
}

export default PasswordDisplay;

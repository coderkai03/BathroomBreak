const Preference = ({ role, desc, imgFirst, imgurl }) => {
    return (
        <div className="pref-item">
            {imgFirst ? (
                <>
                    <img className="role-icon" src={imgurl} />
                    <div className="role-item">
                        <h1>{role}</h1>
                        <p>{desc}</p>
                    </div>
                </>
            ) : (
                <>

                </>
            )}
        </div>
    );
};

export default Preference;

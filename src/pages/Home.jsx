import React, {useState} from 'react';
//components
import MyModal from "../components/UI/Modal/MyModal";
import AddHeroForm from "../components/AddHeroForm/AddHeroForm";
import MyButton from "../components/UI/Button/MyButton";
import AllHeroes from "../components/AllHeroes/AllHeroes";

const Home = () => {
    const [modal, setModal] = useState(false);

    return (
        <div className="container">
            <MyButton onClick={() => {setModal(true)}}>Create Superhero</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <AddHeroForm />
            </MyModal>
            <AllHeroes/>
        </div>
    );
};

export default Home;
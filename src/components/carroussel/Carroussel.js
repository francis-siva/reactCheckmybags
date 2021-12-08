import React from 'react';
import './Carroussel.css';
import Card from './../card/Card';

const Carroussel = () => {

    return (
        <div className="carroussel-container">
            <Card urlPic="https://checkmybags.netlify.app/static/media/bandouliere-back-to-school.0750d39c.jpg"
            name="bag1"
            altPic="model_with_bag" />

            <Card urlPic="https://checkmybags.netlify.app/static/media/bandouliere-poignee-metal-et-bi-matiere.8bdd8c3c.jpg"
                name="bag2"
                altPic="model_with_bag" />

            <Card urlPic="https://checkmybags.netlify.app/static/media/cabas-bi-matiere-poche-devant-avec-foulard.2187cb46.jpg"
                        name="bag3"
                        altPic="model_with_bag" />
        </div>
    );
};

export default Carroussel;
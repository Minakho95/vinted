import { Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";
const Publish = ({ userToken }) => {
  const [picture, setPicture] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [preview, setPreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const errorColor = "red";

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);

      const response = await axios.post(
        "https://vinted-michaels.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
        alert(`${name} a été publié dans les annonces.`);
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(error.response.data);
    }
  };

  return userToken ? (
    <div className="publish-container">
      <div>
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="file-input">
            <div className="dashed-preview-pic">
              {preview ? (
                <>
                  <img src={URL.createObjectURL(picture)} />
                  <div
                    className="remove-pic-button"
                    onClick={() => {
                      setPreview("");
                    }}
                  >
                    X
                  </div>
                </>
              ) : (
                <div className="input-design">
                  <label htmlFor="file" className="label-file">
                    <span className="input-sign">+</span>
                    <span>Ajoute une photo</span>
                  </label>
                  <input
                    className="input-file"
                    id="file"
                    type="file"
                    onChange={(event) => {
                      setPicture(event.target.files[0]);
                      setPreview(URL.createObjectURL(event.target.files[0]));
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="text-input">
            <div className="text-single-input">
              <h4>Titre</h4>
              <input
                className="input"
                placeholder="ex : Chemise Sézane verte"
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="text-single-input">
              <h4>Décris ton article</h4>
              <textarea
                placeholder="ex : porté quelques fois, taille correctement"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows="5"
              />
            </div>
          </div>
          <div className="text-input">
            <div className="text-single-input">
              <h4>Marque</h4>
              <input
                title="Marque"
                placeholder="ex : Zara"
                type="text"
                onChange={(event) => setBrand(event.target.value)}
              />
            </div>
            <div className="text-single-input">
              <h4>Taille</h4>
              <input
                title="Taille"
                placeholder="ex : XL"
                type="text"
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
            <div className="text-single-input">
              <h4>Couleur</h4>
              <input
                title="Couleur"
                placeholder="ex : Bleu"
                type="text"
                onChange={(event) => setColor(event.target.value)}
              />
            </div>
            <div className="text-single-input">
              <h4>Etat</h4>
              <input
                title="État"
                placeholder="Neuf avec étiquette"
                type="text"
                onChange={(event) => setCondition(event.target.value)}
              />
            </div>

            <div className="text-single-input">
              <h4>Lieu</h4>
              <input
                title="Lieu"
                placeholder="ex : Paris"
                type="text"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
          </div>
          <div className="text-input">
            <div className="text-single-input">
              <h4>Prix</h4>
              <input
                title="Prix"
                placeholder="0,00 €"
                type="text"
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>
          <span style={{ color: errorColor }}>{errorMessage}</span>

          <div className="form-button">
            <button type="submit" className="button-validation">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;

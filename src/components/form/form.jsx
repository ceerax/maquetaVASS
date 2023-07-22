import React from "react";
import Input from "../input/input";
import "./form.scss";

const Form = () => {
  return (
    <div style={{ background: "black" }}>
      <div className="container-fluid">
        <div className="offset-sm-1  offset-md-1 col-md-10  offset-lg-1 col-lg-10">
          <div className="tracking-in-expand-fwd-bottom pt-5">
            <div className="col-lg-9 col-sm-11 col-12">
              <div className="form-wrapper">
                <div className="form">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="form-group align-items-center focused mb-5">
                        <Input label="Nombre y apellido " />
                      </div>
                      <div className="form-group align-items-center mb-5 ">
                        <Input label="Email" />
                      </div>
                      <div className="form-group align-items-center mb-5 ">
                        <Input label="Empresa/ organizmo" />
                      </div>
                      <div className="form-group align-items-center mb-5 ">
                        <Input label="Pais" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                      <div className="form-group align-items-center mb-5 ">
                        <Input label="Telefono" />
                      </div>
                      <div>
                        <h6 className=" text-white-50">Mensaje:</h6>
                        <textarea
                          className="form-control bg-black mb-5"
                          value="Escribe aquí tu mensaje"
                          readOnly
                        />
                      </div>
                      <div className="mb-3 d-flex justify-content-end">
                        <input type="submit" className="inputSubmit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

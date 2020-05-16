import Api from "../axios/Api";

export const getFasilitas = () => async (dispatch) => {
  const token = "Bearer " + localStorage.token;

  var data = [];
  if (token) {
    await Api.get("/dmaster/fasilitaskarantina", {
      headers: { Authorization: token },
    })
      .then((response) => {
        data = response.data;
        dispatch({
          type: "GET_FASILITAS",
          data: data,
        });
      })
      .catch((error) => {});
  }
};

export const hapusFasilitas = (id) => async (dispatch) => {
  const token = "Bearer " + localStorage.token;

  if (token) {
    await Api.post(
      `/dmaster/fasilitaskarantina/${id}`,
      { _method: "DELETE" },
      { headers: { Authorization: token } }
    ).then(
      (res) => {},
      (error) => {
        console.log(error);
      }
    );
  }
};

export const tambahFasilitas = (formValues, callback) => async (dispatch) => {
  const token = "Bearer " + localStorage.token;

  var data = { ...formValues };

  if (formValues.PmDesaID === "" || formValues.PmDesaID === "--") {
    data = { ...formValues, PmDesaID: null, Nm_Desa: null };
  }

  if (token) {
    await Api.post(
      `/dmaster/fasilitaskarantina/store`,
      { ...data },
      { headers: { Authorization: token } }
    ).then(
      (res) => {},
      (error) => {
        console.log(error);
      }
    );
  }

  if (callback) {
    callback();
  }
};

export const ubahFasilitas = (id, formValues, callback) => async (dispatch) => {
  const token = "Bearer " + localStorage.token;

  var data = { ...formValues };

  if (formValues.PmDesaID === "" || formValues.PmDesaID === "--") {
    data = { ...formValues, PmDesaID: null, Nm_Desa: null };
  }

  if (token) {
    await Api.post(
      `/dmaster/fasilitaskarantina/${id}`,
      { _method: "PUT", ...data },
      { headers: { Authorization: token } }
    ).then(
      (res) => {},
      (error) => {
        console.log(error);
      }
    );
  }

  if (callback) {
    callback();
  }
};

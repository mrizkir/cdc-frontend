import Api from "../axios/Api";

export const getPetugas = () => async (dispatch) => {
  const token = "Bearer " + localStorage.token;

  var data = [];
  if (token) {
    await Api.get("/setting/userspetugas", {
      headers: { Authorization: token },
    })
      .then((response) => {
        data = response.data;

        dispatch({
          type: "GET_PETUGAS",
          data: data,
        });
      })
      .catch((error) => {});
  }
};

export const tambahPetugas = (formValues, callback) => async (dispatch) => {
  const token = "Bearer " + localStorage.token;

  var data = { ...formValues };

  if (formValues.PmDesaID === "" || formValues.PmDesaID === "--") {
    data = { ...formValues, PmDesaID: null, Nm_Desa: null };
  }

  if (token) {
    await Api.post(
      `/setting/userspetugas/store`,
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

export const hapusPetugas = (id) => async (dispatch) => {
  const token = "Bearer " + localStorage.token;

  if (token) {
    await Api.post(
      `/setting/userspetugas/${id}`,
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

export const ubahPetugas = (id, formValues) => async (dispatch) => {
  var data = { ...formValues };

  if (
    formValues.PmDesaID === "" ||
    formValues.PmDesaID === "--" ||
    formValues.PmDesaID === "Semua Desa"
  ) {
    data = { ...formValues, PmDesaID: null, Nm_Desa: null };
  }
  console.log(data);
  const token = "Bearer " + localStorage.token;

  if (token) {
    await Api.post(
      `/setting/userspetugas/${id}`,
      { _method: "PUT", ...data },
      { headers: { Authorization: token } }
    ).then(
      (res) => {},
      (error) => {
        console.log(error);
      }
    );
  }
};

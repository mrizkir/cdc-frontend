import Api from "../axios/Api";

export const getKecamatan = () => async (dispatch) => {
  var data = [];

  await Api.get("/dmaster/kecamatan")
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  dispatch({
    type: "GET_KECAMATAN",
    data: data,
  });
};
export const getDesa = (id) => async (dispatch) => {
  var data = [];

  await Api.get(`/dmaster/kecamatan/${id}/desa`)
    .then((response) => {
      data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  dispatch({
    type: "GET_DESA",
    data: data,
  });
};

export const ubahKecamatan = (id, formValues) => async (dispatch) => {
  const token = "Bearer " + localStorage.token;

  if (token) {
    await Api.post(
      `/dmaster/kecamatan/${id}`,
      { _method: "PUT", ...formValues },
      { headers: { Authorization: token } }
    ).then(
      (res) => {},
      (error) => {
        console.log(error);
      }
    );
  }
};

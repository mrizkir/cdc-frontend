import Api from "../axios/Api";

export const getKecamatan = (callback) => async (dispatch) => {
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

  if (callback) {
    callback();
  }
};
export const getDesa = (id, callback) => async (dispatch) => {
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

  if (callback) {
    callback();
  }
};
export const getStatus = () => async (dispatch) => {
  var data = [];

  await Api.get(`/dmaster/statuspasien`)
    .then((response) => {
      data = response.data.statuspasien;
    })
    .catch((error) => {
      console.log(error);
    });

  dispatch({
    type: "GET_STATUS",
    data: data,
  });
};
export const getTotalKasus = () => async (dispatch) => {
  var data = [];

  await Api.get(`/dashboard/front`)
    .then((response) => {
      data = {
        ringkasan: response.data.ringkasan,
        total: response.data.totalkasus,
      };
    })
    .catch((error) => {
      console.log(error);
    });

  dispatch({
    type: "GET_TOTAL_KASUS",
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

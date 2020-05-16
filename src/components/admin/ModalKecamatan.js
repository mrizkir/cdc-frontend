import React, { Component, useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getKecamatan } from "../../actions/actionSystem";

const ModalKecamatan = ({
  modalKecamatanClose,
  modalKecamatan,
  getKecamatan,
  listKecamatan,
  onChange,
  selected,
}) => {
  const [id, setId] = useState("");
  const [nama, setNama] = useState(selected);

  useEffect(() => {
    getKecamatan();
  }, []);

  const onSelect = (nama, id) => {
    setId(id);
    setNama(nama);
  };

  const renderKecamatan = !listKecamatan.kecamatan
    ? null
    : listKecamatan.kecamatan.map((kec) => {
        return (
          <Form.Check
            key={kec.PmKecamatanID}
            aria-label="option 1"
            type="radio"
            name="kecamatan"
            label={kec.Nm_Kecamatan}
            id={kec.Nm_Kecamatan}
            onClick={() => onSelect(kec.Nm_Kecamatan, kec.PmKecamatanID)}
            checked={
              nama
                ? kec.Nm_Kecamatan === nama
                  ? "defaultChecked"
                  : ""
                : kec.Nm_Kecamatan === selected
                ? "defaultChecked"
                : ""
            }
          />
        );
      });

  return (
    <Modal size="sm" show={modalKecamatan} onHide={modalKecamatanClose}>
      <Modal.Header closeButton>
        <Modal.Title>Kecamatan</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderKecamatan}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={modalKecamatanClose}>
          Batal
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onChange(id, nama);
            modalKecamatanClose();
          }}
        >
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const stateToProps = (state) => {
  return {
    listKecamatan: state.listKecamatan,
  };
};

export default connect(stateToProps, { getKecamatan })(ModalKecamatan);

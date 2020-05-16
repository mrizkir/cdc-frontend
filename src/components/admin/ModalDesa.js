import React, { Component, useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getDesa } from "../../actions/actionSystem";

const ModalDesa = ({
  modalDesaClose,
  modalDesa,
  listDesa,
  onChange,
  selected,
  labelDefault,
}) => {
  const [id, setId] = useState("");
  const [nama, setNama] = useState(selected);

  useEffect(() => {
    // getDesa(idKecamatan);
  }, []);

  const onSelect = (nama, id) => {
    setId(id);
    setNama(nama);
  };

  const renderDesa = !listDesa.desa
    ? null
    : listDesa.desa.map((kec) => {
        return (
          <Form.Check
            key={kec.PmDesaID}
            aria-label="option 1"
            type="radio"
            name="Desa"
            label={kec.Nm_Desa}
            id={kec.Nm_Desa}
            onClick={() => onSelect(kec.Nm_Desa, kec.PmDesaID)}
            checked={
              nama
                ? kec.Nm_Desa === nama
                  ? "defaultChecked"
                  : ""
                : kec.Nm_Desa === selected
                ? "defaultChecked"
                : ""
            }
          />
        );
      });

  return (
    <Modal size="sm" show={modalDesa} onHide={modalDesaClose}>
      <Modal.Header closeButton>
        <Modal.Title>Desa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Check
          key="123"
          aria-label="option 1"
          type="radio"
          name="Desa"
          label={labelDefault}
          id={labelDefault}
          onClick={() => onSelect(labelDefault, labelDefault)}
          checked={
            nama
              ? nama === labelDefault
                ? "defaultChecked"
                : ""
              : selected === labelDefault
              ? "defaultChecked"
              : ""
          }
        />
        {renderDesa}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={modalDesaClose}>
          Batal
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onChange(id, nama);
            modalDesaClose();
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
    listDesa: state.listDesa,
  };
};

export default connect(stateToProps, { getDesa })(ModalDesa);

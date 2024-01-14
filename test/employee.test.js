const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../src/index");

const { SUC_CODES, CREATE_SUC_CODES, UPDATE_SUC_CODES, DELETE_SUC_CODES } =
  require("../src/modules/employee-management/constants").Codes;

const responseType = {
  id: expect.any(String),
  first_name: expect.any(String),
  last_name: expect.any(String),
  email: expect.any(String),
  number: expect.any(String),
  photo: expect.any(String),
  gender: expect.any(String),
  _id: expect.any(String),
  createdAt: expect.any(String),
  updatedAt: expect.any(String),
  __v: expect.any(Number),
};

const inputData = {
  id: "00000",
  first_name: "testFirst",
  last_name: "testLast",
  email: "test@gamail.com",
  number: "0714566586",
  photo: "https://randomuser.me/api/portraits/men/32.jpg",
  gender: "M",
};

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

describe("POST /employee", () => {
  it("should add employees", async () => {
    const {
      body: { data: resObject, code, message },
    } = await request(app).post("/employee").send(inputData);
    expect(code).toBe(201);
    expect(message).toBe(CREATE_SUC_CODES.message);
    expect(resObject).toEqual(responseType);
  });

  it("When add employee with wrong data", async () => {
    inputData.email = "test.data";
    const {
      body: { code },
    } = await request(app).post("/employee").send(inputData);
    expect(code).toBe(400);
  });
});

describe("GET /employees", () => {
  it("should return all employees", async () => {
    const {
      body: {
        data: [employeeData],
        code,
        message,
      },
    } = await request(app)
      .get("/employee")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(code).toBe(200);
    expect(message).toBe(SUC_CODES.message);
    expect(employeeData).toEqual(responseType);
  });

  it("should return employee by search params Id", async () => {
    const {
      body: {
        data: [employeeData],
        code,
        message,
      },
    } = await request(app)
      .get("/employee")
      .query({ id: inputData.id })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(code).toBe(200);
    expect(message).toBe(SUC_CODES.message);
    expect(employeeData).toEqual(responseType);
  });
});

describe("GET /employee", () => {
  it("should return employee", async () => {
    const {
      body: { data: employeeData, code },
    } = await request(app)
      .get(`/employee/${inputData.id}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(code).toBe(200);
    expect(employeeData).toEqual(responseType);
  });
});

describe("Update /employee", () => {
  it("should return updated employee", async () => {
    const {
      body: { data: employeeData, code, message },
    } = await request(app)
      .put(`/employee/${inputData.id}`)
      .send({ email: "update@gamail.com" })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(code).toBe(200);
    expect(message).toBe(UPDATE_SUC_CODES.message);
    expect(employeeData).toEqual(responseType);
  });
});

describe("Delete /employee", () => {
  it("successfully delete employee", async () => {
    const {
      body: { code, message },
    } = await request(app)
      .delete(`/employee/${inputData.id}`)
      .send({ email: "update@gamail.com" })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(code).toBe(200);
    expect(message).toBe(DELETE_SUC_CODES.message);
  });
});

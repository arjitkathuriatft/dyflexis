describe("Restful Booker API Validations", () => {
  let token;

  before(() => {
    // ------------ Create token -------------
    cy.request("POST", "https://restful-booker.herokuapp.com/auth", {
      username: "admin",
      password: "password123",
    }).then((response) => {
      expect(response.body).to.have.property("token");
      token = response.body.token;
      cy.log(token);
    });
  });

  it("should be able to get all bookings", () => {
    // --------------- Get bookings------------------
    cy.request("GET", "https://restful-booker.herokuapp.com/booking").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.be.an("array");

        // ----Verify all array element should have booking ids
        response.body.forEach((item) => {
          expect(item).to.have.property("bookingid");
        });
      }
    );
  });

  it("should be able to create a booking", () => {
    // -----------create booking-------------
    const newBooking = {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2028-01-01",
        checkout: "2029-01-05",
      },
      additionalneeds: "Breakfast",
    };

    cy.request(
      "POST",
      "https://restful-booker.herokuapp.com/booking",
      newBooking
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
      expect(response.body.booking.firstname).to.equal("Jim");
      expect(response.body.booking.lastname).to.equal("Brown");
      expect(response.body.booking.totalprice).to.equal(111);
    });
  });

  it("should be able to update a booking", () => {
    // ---------------- Update a booking-----------------
    const updateBooking = {
      firstname: "James",
      lastname: "Brown",
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-10",
        checkout: "2019-01-15",
      },
      additionalneeds: "Breakfast",
    };

    cy.request({
      method: "PUT",
      url: "https://restful-booker.herokuapp.com/booking/1",
      headers: { Cookie: `token=${token}`, Accept: "application/json" },
      body: updateBooking,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("should be able to partially update a booking", () => {
    //------------------Partial update-----------------------
    const partialUpdateBooking = {
      firstname: "James",
      lastname: "Brown",
    };

    cy.request({
      method: "PATCH",
      url: "https://restful-booker.herokuapp.com/booking/1",
      headers: { Cookie: `token=${token}`, Accept: "application/json" },
      body: partialUpdateBooking,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });

  it("should be able to delete a booking", () => {
    // -----------Delete booking-----------------
    cy.request({
      method: "DELETE",
      url: "https://restful-booker.herokuapp.com/booking/1",
      headers: { Cookie: `token=${token}` },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

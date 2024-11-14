describe("Email assertion:", () => {
    it("Using gmail_tester.get_messages(), look for an email with specific subject and link in email body", function () {
      // debugger; //Uncomment for debugger to work...
      cy.task("gmail:get-messages", {
        options: {
          from: "no-reply@youtube.com",
          subject: "Annual reminder about YouTube’s Terms of Service, Community Guidelines and Privacy Policy",
          include_body: true,
          before: new Date(2024, 11, 24, 12, 31, 13), // Before Nove 24rd, 2019 12:31:13
          after: new Date(2024, 7, 23), // After August 23, 2019
        },
      }).then((emails) => {
        assert.isAtLeast(
          emails.length,
          1,
          "Expected to find at least one email, but none were found!"
        );
        const body = emails[0].body.html;

        cy.log(body)
        // assert.isTrue(
        //   body.indexOf("Hi doddalingappa") >= 0,
        //   "'Hi doddalingappa' is present in the email body!"
        // );
      });
    });
  });
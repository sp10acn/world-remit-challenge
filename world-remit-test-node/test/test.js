const chai = require('chai');
const chaiHttp = require('chai-http');
const nock = require('nock');
const app = require('../app');

const expect = chai.expect;
chai.use(chaiHttp);

describe("App", () => {
    it("should return data on /sousers success with status 200", (done) => {
        const resBody = {
            items: [
                {
                    display_name: "Bob",
                    profile_image: ""
                }
            ]
        };

        nock("http://api.stackexchange.com")
            .get("/2.2/users")
            .query(() => true)
            .reply(200, resBody);

        chai.request(app).get("/sousers").end((err, res) => {
            expect(err).to.equal(null);
            expect(res).to.have.status(200);
            expect(res.body).to.eql(resBody);
            done();
        });
    })

    it("should return empty object on failure with status 500", (done) => {
        nock("http://api.stackexchange.com")
        .get("/2.2/users")
        .query(() => true)
        .reply(500, {});

        chai.request(app).get("/sousers").end((err, res) => {
            expect(err).to.not.equal(null);
            expect(res).to.have.status(500);
            expect(res.body).to.be.eql({});
            done();
        });
    })
});
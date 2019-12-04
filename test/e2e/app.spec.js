const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
  let httpServer = null;
  let pageObject = null;

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  // This is where your code is going to go
  it('should contain a <h1> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
      });
  });

  it('should contain a <h1> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
      });
  });

  it('should contain a <title> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('title').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('prove-it-works');
      });
  });

  it('should contain a <p> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('p').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Hello and welcome to the Mortgage Calculator.');
      });
  });

  it('should contain a <h2> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('h2').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Have fun.');
      });
  });

  it('should contain a <h3> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('h3').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Learn something.');
      });
  });

  it('should contain a <h4> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('h4').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Solve problems.');
      });
  });

  it('should contain a <h5> element for the page title', () => { 
    return pageObject
      .evaluate(() => document.querySelector('h5').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Pay your bills.');
      });
  });



})
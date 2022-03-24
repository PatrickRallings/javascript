const users = [
  {
    id: 1232,
    firstName: "Cam",
    lastName: "Danvers",
    logins: 35,
    isPremiumMember: false,
  },
  {
    id: 3283,
    firstName: "Elijah",
    lastName: "Hawkings",
    logins: 3,
    isPremiumMember: true,
  },
  {
    id: 9283,
    firstName: "Ragupathy",
    lastName: "Bodem",
    logins: 12,
    isPremiumMember: false,
  },
  {
    id: 6972,
    firstName: "Jamilla",
    lastName: "Johnson",
    logins: 5,
    isPremiumMember: true,
  },
  {
    id: 3998,
    firstName: "Jose",
    lastName: "Rivera",
    logins: 16,
    isPremiumMember: false,
  },
  {
    id: 4982,
    firstName: "Ted",
    lastName: "Witherspoon",
    logins: 53,
    isPremiumMember: true,
  },
  {
    id: 6929,
    firstName: "Igor",
    lastName: "Silenski",
    logins: 23,
    isPremiumMember: false,
  },
  {
    id: 3879,
    firstName: "Ira",
    lastName: "Bolislovitz",
    logins: 9,
    isPremiumMember: false,
  },
];

const findJose = users.find((jose) => (jose.firstName = "Jose"));
console.log(findJose);

const premiumMember = users.filter((prem) => (prem.isPremiumMember = true));
console.log(premiumMember);

const last = users.map((lst) => lst.lastName);
console.log(last);

const tenLog = users
  .filter((lg) => lg.logins > 10)
  .map((lgmap) => lgmap.firstName + " " + lgmap.lastName);
console.log(tenLog);

const totLog = users
  .map((ttlg) => ttlg.logins).reduce(function (logins, init) {
    return logins + init;
  }, 0);
console.log(totLog);
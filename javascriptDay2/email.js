let gmailData = {
  inbox: [
    { from: "nameA", message: "nameA message" },
    { from: "nameB", message: "nameB message" },
    { from: "nameC", message: "nameC message" },
  ],
  drafts: [
    { to: "nameADraft", message: "nameA messageDraft" },
  ],
  sent: [
    { to: "nameA", message: "nameA message" },
    { to: "nameB", message: "nameB message" },
    { to: "nameC", message: "nameC message" },
  ],

  contacts: [
    { name: "nameA", email: "nameAEmailAddress" },
    { name: "nameB", email: "nameBEmailAddress" },
    { name: "nameC", email: "nameCEmailAddress" },
  ],
};

function recallNames(arr) {
  let fromList = [];
  for (let i = 0; i < arr.length; i++) {
    fromList.push(arr[i].from);
  }
  console.log(fromList);
}

function recallEmails(arr) {
  let emailList = [];
  for (let i = 0; i < arr.length; i++) {
    emailList.push(arr[i].message);
  }
  console.log(emailList);
}

recallNames(gmailData.inbox);
recallEmails(gmailData.inbox);

console.log(gmailData.inbox[1].message)

let drafted = gmailData.drafts[0]
gmailData.sent.push(drafted)
gmailData.drafts.shift()

gmailData.drafts.push({to: "pushedDraftNameA", message: "pushedDraftNameA pushedDraftMessage"})

console.log(gmailData.sent)
console.log(gmailData.drafts)
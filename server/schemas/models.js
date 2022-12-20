const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
});

const DomainsSchema = new mongoose.Schema({
  domainName: String,
  domainTemplate: String,
  account: { type: mongoose.Schema.Types.ObjectId },
});

const SectionsSchema = new mongoose.Schema({
  sectionTag: String,
  sectionTitle: String,
  sectionDescription: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const BenefitsSchema = new mongoose.Schema({
  benefitName: String,
  benefitLabel: String,
  benefitIcon: String,
  benefitDescription: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const PagesSchema = new mongoose.Schema({
  pageTitle: String,
  pageName: String,
  pageDescription: String,
  pageLabel: String,
  pageBreadcrumb: String,
  pageSlug: String,
  pageMedia: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const SolutionsSchema = new mongoose.Schema({
  solutionName: String,
  solutionLabel: String,
  solutionIcon: String,
  solutionDescription: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const QuestionsSchema = new mongoose.Schema({
  questionName: String,
  questionAnswer: String,
  questionUser: String,
  questionAvatar: String,
  questionDescriptor: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const ReferencesSchema = new mongoose.Schema({
  referenceUser: String,
  referenceAvatar: String,
  referenceDescriptor: String,
  referenceLabel: String,
  referenceDescription: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const ButtonsSchema = new mongoose.Schema({
  buttonName: String,
  buttonDescription: String,
  buttonLink: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});

const TempFile = new mongoose.Schema({
  json: Object,
  data: Object,
  name: String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const SlugPageMainSchema = new mongoose.Schema({
  pageBreadcrumb:String,
  pageDescription:String,
  pageLabel:String,
  pageMedia:[String],
  pageName:String,
  pageTitle:String,
  slugUrl:String,
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const SlugPageSchema = new mongoose.Schema({
  slugBenefits: [BenefitsSchema],
  slugButtons: [ButtonsSchema],
  slugPageMainInfos:[SlugPageMainSchema],
  slugQuestions: [QuestionsSchema],
  slugReferences: [ReferencesSchema],
  slugSections: [SectionsSchema],
  slugSolutions: [SolutionsSchema],
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});
const slugPagesPerSchema = new mongoose.Schema({
  slugPage:[SlugPageSchema],
  template: { type: mongoose.Schema.Types.ObjectId, ref: "templates" },
});

const TemplatesSchema = new mongoose.Schema({
  templateName: {
    type: String,
    required: true,
    unique: true
  },
  templateUrl:String,
  templateDescription: String,
  templateTitle: String,
  templateFile: TempFile,
  templateIcon: String,
  account: { type: mongoose.Schema.Types.ObjectId },
  sections: [SectionsSchema],
  benefits: [BenefitsSchema],
  pages: [PagesSchema],
  solutions: [SolutionsSchema],
  questions: [QuestionsSchema],
  references: [ReferencesSchema],
  buttons: [ButtonsSchema],
  slugPagesPer:[slugPagesPerSchema]
});


module.exports = mongoose.models.Account || mongoose.model("Account", AccountSchema);
module.exports = mongoose.models.domains || mongoose.model("domains", DomainsSchema);
module.exports.Templates = mongoose.models.templates || mongoose.model("templates", TemplatesSchema);
module.exports.Offers = mongoose.models.pages || mongoose.model("pages", PagesSchema);
module.exports.Sections = mongoose.models.sections || mongoose.model("sections", SectionsSchema);
module.exports.Benefits = mongoose.models.benefits || mongoose.model("benefits", BenefitsSchema);
module.exports.Solutions = mongoose.models.solutions || mongoose.model("solutions", SolutionsSchema);
module.exports.Questions = mongoose.models.questions || mongoose.model("questions", QuestionsSchema);
module.exports.References = mongoose.models.references || mongoose.model("references", ReferencesSchema);
module.exports.Buttons = mongoose.models.buttons || mongoose.model("buttons", ButtonsSchema);
// const Meeting = mongoose.model("Meeting", MeetingSchema)
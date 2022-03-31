function Job(name, industry, requiresDegree, field, compensation) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.compensation = compensation;
        function getName() {
            return 'The name of the job is '+this.name;
    }
        function getFieldandIndustry() {
            return this.name+' is in the field of '+this.field+' and in the industry of '+this.industry+'.';
    }
        function getCompensation() {
            return 'The compensation for the job of '+this.name+' is '+this.compensation+'.';
    }
}
 class Opportunity extends Job {
     constructor(name, industry, requiresDegree, field, compensation, growingField) {
        super (name, industry, requiresDegree, field, compensation)
        this.growingField = growingField
        }
 }
 const forester = new Job('Forester', 'Agriculture', true, 'Forestation', 62000)
 const architect = new Job('Architect', 'Construction', true, 'Architecture', 81000)
 const editor = new Job('Editor', 'Arts', false, 'Audio/Video Technology', 37000)

 console.log(forester.getName());
 console.log(forester.getCompensation());

 console.log(architect.getCompensation());
 console.log(architect.getFieldandIndustry());

 console.log(editor.getName());
 console.log(editor.getCompensation());

 const softwareDeveloper = new Opportunity('Software Developer', 'Technology', false, 'Technology', 110000, true);

 console.log(softwareDeveloper.getCompensation());
 console.log(softwareDeveloper.getFieldandIndustry());
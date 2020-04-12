
function MemberFactory() {
    this.createMember = function(name, type) {
      let member;
  
      if(type === 'simple') {
        member = new SimpleMembership(name,type);
      } else if (type === 'standard') {
        member = new StandardMembership(name,type);
      } else if (type === 'super') {
        member = new SuperMembership(name,type);
      }
  
      member.type = type;
  
      member.define =  function() {             
        console.log(`${this.name} (${this.type}): ${this.cost}`);
      }
  
      return member;
    }
  }
  
  const SimpleMembership = function(name,type) {
    this.name = name;
    this.type=type;
    this.cost = '$5';
  }
  
  const StandardMembership = function(name,type) {
    this.name = name;
    this.type=type;
    this.cost = '$15';
  }
  
  const SuperMembership = function(name,type) {
    this.name = name;
    this.type=type;
    this.cost = '$25';
  }
  
  const members = [];
  const factory = new MemberFactory();
  
  members.push(factory.createMember('manish', 'super'));
  members.push(factory.createMember('avishek', 'super'));
  members.push(factory.createMember('sabina', 'simple'));
  members.push(factory.createMember('suman', 'standard'));
  
  // console.log(members);
  
  members.forEach(function(member) {
    member.define();
  });
  
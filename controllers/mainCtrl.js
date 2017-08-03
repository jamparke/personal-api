
let user = require('../user.js')
let skills = require('../skillz.js')
let skillCount = 3
let secrets = require('../secrets.js')
module.exports = {
  getName: function (req, res, next) {
    var userName = { name: user.name }
    res.json(userName)
  },
  getLocation: function (req, res, next) {
    var userLoc = { location: user.location }
    res.json(userLoc)
  },
  getOccupation: function (req, res, next) {
    var userOcc = { occupations: user.occupations }
    if (req.query.order == 'desc') {
      userOcc = user.occupations.sort(function (a, b) {
        return a.localeCompare(b)
      })
      res.json(userOcc)
    } else if (req.query.order == 'asc') {
      userOcc = user.occupations.sort(function (a, b) {
        return a.localeCompare(b)
      })
      res.json(userOcc.reverse())
    } else {
      res.json(userOcc)
    }
  },
  getOccLate: function (req, res, next) {
    var userOccLate = { occupations: user.occupations[user.occupations.length - 1] }
    res.json(userOccLate)
  },
  getHobbies: function (req, res, next) {
    var userHobbies = { hobbies: user.hobbies }
    res.json(userHobbies)
  },
  getHobby: function (req, res, next) {
    var userHobbies = { hobbies: user.hobbies }
    // console.log(userHobbies);
    const filtered = user.hobbies.filter(function (hobby) {
      console.log(hobby.type.toLowerCase())
      return hobby.type.toLowerCase() === req.params.type.toLowerCase()
    })
    res.json(filtered)
  },
  getFamily: function (req, res, next) {
    if (req.query.relation) {
      const filtered = user.family.filter(function (val) {
        return val.relation.toLowerCase() === req.query.relation.toLowerCase()
      })
      res.json(filtered)
    } else if (req.params.gender) {
      const filtered = user.family.filter(function (member) {
        // console.log(hobby.type.toLowerCase())
        return member.gender.toLowerCase() === req.params.gender.toLowerCase()
      })
      res.json(filtered)
    } else {
      res.status(200).json(user.family)
    }
  },
  getRestaurants: function (req, res, next) {
    if (req.query.rating) {
      const filtered = user.restaurants.filter(function (val) {
        // console.log(val.rating)
        if (val.rating >= 2) {
          // console.log(val.rating)
          return true
        } else {
          return false
        }
      })
      console.log(filtered)
      res.json(filtered)
    } else if (req.params.name) {
      const filtered = user.restaurants.filter(function (res) {
        return res.name.toLowerCase() === req.params.name.toLowerCase()
      })
      res.json(filtered)
    } else {
      res.status(200).json(user.restaurants)
    }
  },

  updateName: function (req, res, next) {
    if (req.body.name) {
      user.name = req.body.name
    }
    res.status(200).json(user.name)
  },

  updateLocation: function (req, res, next) {
    if (req.body.location) {
      user.location = req.body.location
    }
    res.status(200).json(user)
  },
  addHobby: function (req, res, next) {
    if (req.body.hobbies) {
      user.hobbies.push(req.body.hobbies)
    }
    res.status(200).json(user)
  },
  addOccupation: function (req, res, next) {
    if (req.body.occupations) {
      user.occupations.push(req.body.occupations)
    }
    res.status(200).json(user)
  },
  addFamily: function (req, res, next) {
    if (req.body.family) {
      user.family.push(req.body.family)
    }
    res.status(200).json(user)
  },
  addRestaurant: function (req, res, next) {
    if (req.body.restaurant) {
      user.restaurants.push(req.body.restaurant)
    }
    res.status(200).json(user)
  },

  getSkillz: function (req, res, next) {
    if (req.query.experience) {
      const filtered = skills.filter(function (skill) {
        return skill.experience.toLowerCase() === req.query.experience.toLowerCase()
      })
      res.json(filtered)
    } else {
      res.json(skills)
    }
  },
  addSkillz: function (req, res, next) {
    if (req.body.skillz) {
      skills.push(req.body.skillz)
      skills[skillCount].id = ++skillCount
    }
    res.json(skills)
  },
  getSecrets: function (req, res, next) {
    res.json(secrets)
  }
}

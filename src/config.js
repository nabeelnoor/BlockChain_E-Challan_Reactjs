export const SIMP_STORAGE_ADDRESS = ''
export const SIMP_STORAGE_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "ActiveChallan",
    "outputs": [
      {
        "internalType": "string",
        "name": "LicenseID",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "CitizenName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "CitizenCNIC",
        "type": "string"
      },
      {
        "internalType": "enum ChallanSystem.VehicleType",
        "name": "CarType",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "CarNumberPlate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "timeStamp",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "Fine",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ChallanHistory",
    "outputs": [
      {
        "internalType": "string",
        "name": "LicenseID",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "CitizenName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "CitizenCNIC",
        "type": "string"
      },
      {
        "internalType": "enum ChallanSystem.VehicleType",
        "name": "CarType",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "CarNumberPlate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "timeStamp",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "Fine",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "RuleList",
    "outputs": [
      {
        "internalType": "string",
        "name": "Description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "ACategoryVehicle_Fine",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "BCategoryVehicle_Fine",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "CCategoryVehicle_Fine",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "TP",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "testStatus",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "testValue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_TP",
        "type": "address"
      }
    ],
    "name": "addTrafficPolice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_Afine",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_Bfine",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_Cfine",
        "type": "uint256"
      }
    ],
    "name": "addTrafficRule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ruleID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_Afine",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_Bfine",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_Cfine",
        "type": "uint256"
      }
    ],
    "name": "updatePriceForRule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ruleID",
        "type": "uint256"
      }
    ],
    "name": "deactivateRule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ruleID",
        "type": "uint256"
      }
    ],
    "name": "activateRule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_LicenseID",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_Name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_CNIC",
        "type": "string"
      },
      {
        "internalType": "enum ChallanSystem.VehicleType",
        "name": "_CarType",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "_carPlate",
        "type": "string"
      },
      {
        "internalType": "uint256[]",
        "name": "_voilatedRules",
        "type": "uint256[]"
      },
      {
        "internalType": "string",
        "name": "_timeStamp",
        "type": "string"
      }
    ],
    "name": "addChallan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_LicenseID",
        "type": "string"
      }
    ],
    "name": "getCurrentChallan",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "LicenseID",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "CitizenName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "CitizenCNIC",
            "type": "string"
          },
          {
            "internalType": "enum ChallanSystem.VehicleType",
            "name": "CarType",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "CarNumberPlate",
            "type": "string"
          },
          {
            "internalType": "uint256[]",
            "name": "VoilationCode",
            "type": "uint256[]"
          },
          {
            "internalType": "string",
            "name": "timeStamp",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "Fine",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "status",
            "type": "bool"
          }
        ],
        "internalType": "struct ChallanSystem.Challan",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_LicenseID",
        "type": "string"
      }
    ],
    "name": "getAllChallan",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "LicenseID",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "CitizenName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "CitizenCNIC",
            "type": "string"
          },
          {
            "internalType": "enum ChallanSystem.VehicleType",
            "name": "CarType",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "CarNumberPlate",
            "type": "string"
          },
          {
            "internalType": "uint256[]",
            "name": "VoilationCode",
            "type": "uint256[]"
          },
          {
            "internalType": "string",
            "name": "timeStamp",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "Fine",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "status",
            "type": "bool"
          }
        ],
        "internalType": "struct ChallanSystem.Challan[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTrafficRules",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "Description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "ACategoryVehicle_Fine",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "BCategoryVehicle_Fine",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "CCategoryVehicle_Fine",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "status",
            "type": "bool"
          }
        ],
        "internalType": "struct ChallanSystem.VoilationRule[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "test",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_LicenseID",
        "type": "string"
      }
    ],
    "name": "payChallan",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
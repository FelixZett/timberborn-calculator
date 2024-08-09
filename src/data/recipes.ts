import type {Building} from "./buildings";
import type {Resource} from "./resources";

export interface Recipe {
  ingredients: Array<ResourceDefinition>;
  product: ResourceDefinition;
  building: Building;
  durationInHours: number;
}

export interface ResourceDefinition {
  resource: Resource;
  count: number;
}

enum RecipeCategory {
  Wood,
  Metal,
  Wellbeing
}

export const recipes: Array<Recipe> = [
  {
    ingredients: [{resource: "Badwater", count: 5}],
    product: {resource: "Dynamite", count: 1},
    building: "Explosives_Factory",
    durationInHours: 3,
  },
  {
    ingredients: [{resource: "Extract", count: 1}],
    product: {resource: "Dirt", count: 6},
    building: "Dirt_Excavator",
    durationInHours: 2,
  },
  {
    ingredients: [],
    product: {resource: "Water", count: 1},
    building: "Water_Pump",
    durationInHours: 0.33,
  },
  {
    building: "Large_Water_Pump",
    durationInHours: 0.33,
    ingredients: [],
    product: {resource: "Water", count: 5},
  },
  {
    ingredients: [],
    product: {resource: "Badwater", count: 1},
    building: "Badwater_Pump",
    durationInHours: 0.33,
  },
  {
    ingredients: [],
    product: {resource: "Badwater", count: 40},
    building: "Badwater_Rig",
    durationInHours: 1,
  },
  {
    ingredients: [
      {resource: "Badwater", count: 4},
      {resource: "Log", count: 0.1},
    ],
    product: {resource: "Extract", count: 1},
    building: "Centrifuge",
    durationInHours: 0.33,
  },
  {
    ingredients: [
      {resource: "Potato", count: 1},
      {resource: "Log", count: 0.1},
    ],
    product: {resource: "Grilled_Potato", count: 4},
    building: "Grill",
    durationInHours: 0.52,
  },
  {
    ingredients: [
      {resource: "Chestnut", count: 1},
      {resource: "Log", count: 0.1},
    ],
    product: {resource: "Grilled_Chestnut", count: 2},
    building: "Grill",
    durationInHours: 0.33,
  },
  {
    ingredients: [
      {resource: "Spadderdock", count: 1},
      {resource: "Log", count: 0.1},
    ],
    product: {resource: "Grilled_Spadderdock", count: 3},
    building: "Grill",
    durationInHours: 0.4,
  },
  {
    ingredients: [{resource: "Wheat", count: 1}],
    product: {resource: "Wheat_Flour", count: 1},
    building: "Gristmill",
    durationInHours: 0.5,
  },
  {
    ingredients: [{resource: "Cattail_Roots", count: 1}],
    product: {resource: "Cattail_Flour", count: 1},
    building: "Gristmill",
    durationInHours: 0.25,
  },
  {
    ingredients: [
      {resource: "Wheat_Flour", count: 1},
      {resource: "Log", count: 0.1},
    ],
    product: {resource: "Bread", count: 5},
    building: "Bakery",
    durationInHours: 1,
  },
  {
    ingredients: [
      {resource: "Cattail_Flour", count: 1},
      {resource: "Log", count: 0.1},
    ],
    product: {resource: "Cattail_Crackers", count: 4},
    building: "Bakery",
    durationInHours: 0.5,
  },
  {
    ingredients: [
      {resource: "Maple_Sap", count: 1},
      {resource: "Wheat_Flour", count: 1},
      {resource: "Log", count: 0.1},
    ],
    product: {resource: "Maple_Pastries", count: 3},
    building: "Bakery",
    durationInHours: 1.5,
  },
  {
    building: "Lumber_Mill",
    product: {resource: "Plank", count: 1},
    ingredients: [{resource: "Log", count: 1}],
    durationInHours: 1.3,
  },
  {
    building: "Gear_Workshop",
    product: {resource: "Gear", count: 1},
    ingredients: [{resource: "Plank", count: 1}],
    durationInHours: 3,
  },
  {
    building: "Paper_Mill",
    product: {resource: "Paper", count: 2},
    ingredients: [{resource: "Log", count: 1}],
    durationInHours: 1.6,
  },
  {
    building: "Printing_Press",
    product: {resource: "Book", count: 1},
    ingredients: [{resource: "Paper", count: 1}],
    durationInHours: 1.5,
  },
  {
    building: "Printing_Press",
    product: {resource: "Punchcard", count: 2},
    ingredients: [
      {resource: "Paper", count: 2},
      {resource: "Plank", count: 1},
    ],
    durationInHours: 0.75,
  },
  {
    building: "Wood_Workshop",
    product: {resource: "Treated_Planks", count: 1},
    ingredients: [
      {resource: "Plank", count: 1},
      {resource: "Pine_Resin", count: 1},
    ],
    durationInHours: 3,
  },
  {
    building: "Smelter",
    product: {resource: "Metal_Block", count: 1},
    ingredients: [
      {resource: "Scrap_Metal", count: 2},
      {resource: "Log", count: 0.2},
    ],
    durationInHours: 4,
  },
  {
    building: "Mine",
    product: {resource: "Scrap_Metal", count: 2},
    ingredients: [
      {resource: "Gear", count: 1},
      {resource: "Treated_Planks", count: 1},
    ],
    durationInHours: 1.8,
  },
  {
    building: "Mine",
    product: {resource: "Science", count: 20},
    ingredients: [],
    durationInHours: 1,
  },
  {
    building: "Refinery",
    product: {resource: "Biofuel", count: 5},
    ingredients: [
      {resource: "Carrot", count: 2},
      {resource: "Water", count: 2},
    ],
    durationInHours: 3,
  },
  {
    building: "Refinery",
    product: {resource: "Biofuel", count: 30},
    ingredients: [
      {resource: "Potato", count: 2},
      {resource: "Water", count: 2},
    ],
    durationInHours: 3,
  },
  {
    building: "Refinery",
    product: {resource: "Biofuel", count: 25},
    ingredients: [
      {resource: "Spadderdock", count: 2},
      {resource: "Water", count: 2},
    ],
    durationInHours: 3,
  },
  {
    building: "Refinery",
    product: {resource: "Catalyst", count: 3},
    ingredients: [
      {resource: "Maple_Sap", count: 1},
      {resource: "Extract", count: 1},
    ],
    durationInHours: 1.5,
  },
  {
    building: "Bot_Part_Factory",
    product: {resource: "Bot_Chassis", count: 1},
    ingredients: [
      {resource: "Plank", count: 5},
      {resource: "Metal_Block", count: 1},
      {resource: "Biofuel", count: 1},
    ],
    durationInHours: 18,
  },
  {
    building: "Bot_Part_Factory",
    product: {resource: "Bot_Limbs", count: 1},
    ingredients: [
      {resource: "Plank", count: 1},
      {resource: "Gear", count: 3},
    ],
    durationInHours: 4.5,
  },
  {
    building: "Bot_Part_Factory",
    product: {resource: "Bot_Head", count: 1},
    ingredients: [
      {resource: "Plank", count: 1},
      {resource: "Gear", count: 3},
      {resource: "Metal_Block", count: 1},
    ],
    durationInHours: 18,
  },
  {
    building: "Bot_Assembler",
    product: {resource: "Bot", count: 1},
    ingredients: [
      {resource: "Bot_Head", count: 1},
      {resource: "Bot_Limbs", count: 4},
      {resource: "Bot_Chassis", count: 1},
    ],
    durationInHours: 36,
  },
  {
    building: "Herbalist",
    product: {resource: "Antidote", count: 1},
    ingredients: [
      {resource: "Paper", count: 1},
      {resource: "Dandelion", count: 2},
      {resource: "Blueberry", count: 2},
    ],
    durationInHours: 2,
  },
  {
    building: "Carrot_Crop",
    product: {resource: "Carrot", count: 3},
    ingredients: [],
    durationInHours: 4 * 24,
  },
  {
    building: "Sunflower_Crop",
    product: {resource: "Sunflower_Seeds", count: 2},
    ingredients: [],
    durationInHours: 5 * 24,
  },
  {
    building: "Potato_Crop",
    product: {resource: "Potato", count: 1},
    ingredients: [],
    durationInHours: 6 * 24,
  },
  {
    building: "Wheat_Crop",
    product: {resource: "Wheat", count: 3},
    ingredients: [],
    durationInHours: 10 * 24,
  },
  {
    building: "Cattail_Crop",
    product: {resource: "Cattail_Roots", count: 3},
    ingredients: [],
    durationInHours: 8 * 24,
  },
  {
    building: "Spadderdock_Crop",
    product: {resource: "Spadderdock", count: 3},
    ingredients: [],
    durationInHours: 12 * 24,
  },
  {
    building: "Blueberry_Bush",
    product: {resource: "Blueberry", count: 3},
    ingredients: [],
    durationInHours: 12 * 24,
  },
  {
    building: "Dandelion_Crop",
    product: {resource: "Dandelion", count: 1},
    ingredients: [],
    durationInHours: 3 * 24,
  },
  {
    building: "Birch",
    product: {resource: "Log", count: 1},
    ingredients: [],
    durationInHours: 9 * 24,
  },
  {
    building: "Pine",
    product: {resource: "Log", count: 2},
    ingredients: [],
    durationInHours: 12 * 24,
  },
  {
    building: "Pine",
    product: {resource: "Pine_Resin", count: 2},
    ingredients: [],
    durationInHours: 7 * 24,
  },
  {
    building: "Chestnut_Tree",
    product: {resource: "Log", count: 4},
    ingredients: [],
    durationInHours: 24 * 24,
  },
  {
    building: "Chestnut_Tree",
    product: {resource: "Chestnut", count: 3},
    ingredients: [],
    durationInHours: 8 * 24,
  },
  {
    building: "Maple",
    product: {resource: "Log", count: 6},
    ingredients: [],
    durationInHours: 28 * 24,
  },
  {
    building: "Maple",
    product: {resource: "Maple_Sap", count: 3},
    ingredients: [],
    durationInHours: 12 * 24,
  },
  {
    building: "Oak",
    product: {resource: "Log", count: 8},
    ingredients: [],
    durationInHours: 30 * 24,
  },
];

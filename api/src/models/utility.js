// Deals with BLOBs being encoded as buffers out of the db for some reason.
module.exports.makeExporter = function (...stringFields) {
  return ({ dataValues: p }) => Object.keys(p).reduce((exported, field) => ({
    ...exported,
    [field]: stringFields.includes(field) ? p[field].toString() : p[field],
  }), {});
};

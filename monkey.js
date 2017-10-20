/**
 * @fileoverview Rule to force users to prefix variables to APA
 * @author Michael Lekrans
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {

    create(context) {
        return {
            VariableDeclarator: function (node) {
                if (node.id.name.indexOf("APA") !== 0) {
                context.report(node, "Variables should start with APA");
                }
            }
        }
    }
};
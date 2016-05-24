;
module.exports = (function(cy)
{
  "use strict";
  window.edgeAddingMode = false;

  cy.cxtmenu({
    selector: 'core',
    commands: [
      {
        content: '<span class="fa fa-flash fa"></span>perform layout',
        select: function(ele)
        {
          cy.layout({name:'cose', padding: 50, animate: 'true'});
        }
      },
    ]
  });

  cy.cxtmenu({
    selector: 'node',
    commands:
    [
      {
        content: '<span class="fa fa-flash fa"></span>delete node(s)',
        select: function(ele)
        {
          cy.nodes(':selected').remove();
          ele.remove();
        }
      },
      // {
      //   content: '<span class="fa fa-star"></span> create compound',
      //   select: function(ele)
      //   {
      //     var selectedNodes = cy.nodes(':selected').size() > 0 ? cy.$(':selected') : ele;
      //     var compNode = cy.add({group: "nodes"})[0];
      //     var compId = compNode.id();
      //     selectedNodes.move({parent: compId});
      //   }
      // },
      {
        content: '<span class="fa fa-star"></span> Add Selected Into This Node',
        select: function(ele)
        {
          //Do nothing if node is not a compound or family node
          if (ele._private.data['type'] === 'GENE' || cy.nodes(':selected').size() < 1)
          {
            return;
          }


          var compId = ele.id();
          var selectedNodes = cy.nodes(':selected');
          var selectedEdges = selectedNodes.neighborhood();
          var copyNodes = selectedNodes.clone();
          var newCollection = cy.collection();
          selectedNodes.remove();

          function traverseSelected(nodes)
          {
            nodes.forEach(function(node, i)
            {
                var children = node.children();
                if (children.length > 0)
                {
                    newCollection = newCollection.add(children);
                    traverseSelected(children)
                }
            });
          }

          traverseSelected(selectedNodes);

          copyNodes.forEach(function(node, i)
          {
              node._private.data.parent = compId;
          });


          // console.log(selectedNodes.parents());
          cy.add(copyNodes.union(selectedEdges));
          newCollection.restore();
          cy.nodes().updateCompoundBounds();
        }
      }
    ]
  });

  cy.cxtmenu({
    selector: 'edge',
    commands: [
      {
        content: '<span class="fa fa-flash fa"></span>delete edge(s)',
        select: function(ele)
        {
          cy.edges(':selected').remove();
          ele.remove();
        }
      }
    ]
  });
}(window.cy));
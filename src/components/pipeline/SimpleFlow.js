import createEngine, {
  DiagramModel,
  DefaultNodeModel,
} from "@projectstorm/react-diagrams";
import * as React from "react";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DemoCanvasWidget } from "../helpers/DemoCanvasWidget";
import { AdvancedLinkFactory, AdvancedPortModel } from './AdvancedNodeLink';

export function SimpleFlow() {
  //1) setup the diagram engine
  var engine = createEngine();
  engine.getLinkFactories().registerFactory(new AdvancedLinkFactory());

  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodeModel({
    name: "Node 1",
    color: "rgb(255,255,0)",
  });
  node1.setPosition(100, 100);
  let port1 = node1.addPort(new AdvancedPortModel(false, 'out', 'n1-out'))

  var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
  // let port2in = node2.addInPort("In");
  // let port2out = node2.addOutPort("Out");

  let port2in = node2.addPort(new AdvancedPortModel(true, 'In', 'n1-in'))
  let port2out = node2.addPort(new AdvancedPortModel(false, 'Out', 'n2-out'))


  node2.setPosition(250, 100 - 50);

  var node3 = new DefaultNodeModel("Node 3", "rgb(192,255,255)");
  // let port3in = node3.addInPort("In");
  // let port3out = node3.addOutPort("Out");

  let port3in = node3.addPort(new AdvancedPortModel(true, 'In', 'n3-in'))
  let port3out = node3.addPort(new AdvancedPortModel(false, 'Out', 'n3-out'))

  node3.setPosition(250, 100 + 50);


  var node4 = new DefaultNodeModel("Node 4", "rgb(192,0,255)");
  // let port4in = node4.addInPort("In");
  // let port4out = node4.addOutPort("Out");

  let port4in = node4.addPort(new AdvancedPortModel(true, 'In', 'n3-in'))
  let port4out = node4.addPort(new AdvancedPortModel(false, 'Out', 'n3-out'))

  node4.setPosition(500, 100);

  var node5 = new DefaultNodeModel("Node 5", "red");
  let port5in = node5.addInPort("In");
  node5.setPosition(700, 100);

  // link the ports
  let link1 = port1.link(port2in);
  // link1.addLabel("Label-1");

  let link2 = port1.link(port3in);
  // link2.addLabel("Label-2");

  let link3 = port2out.link(port4in);
  // link3.addLabel("Label-3");
  link3.point(450, 80);

  let link4 = port3out.link(port4in);
  // link4.addLabel("Label-3");
  link4.point(450, 180);

  let link5 = port4out.link(port5in);

  //4) add the models to the root graph
  model.addAll(node1, node2, node3, node4, node5, link1, link2, link3, link4,link5);

  //5) load model into engine
  engine.setModel(model);

  //6) render the diagram!
  return (
    <DemoCanvasWidget>
      <CanvasWidget engine={engine} />
    </DemoCanvasWidget>
  );
}

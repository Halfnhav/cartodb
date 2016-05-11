module.exports = [
  {
    style: {
      type: 'simple',
      properties: {
        fill: {
          'color': {
            fixed: '#000',
            opacity: 0.4
          },
          'image': null
        }
      }
    },
    result: {
      point: {
        cartocss: '#layer {\nmarker-fill: #000;\nmarker-fill-opacity: 0.4;\n}'
      },
      line: {
        cartocss: '#layer {\n}'
      },
      polygon: {
        cartocss: '#layer {\npolygon-fill: #000;\npolygon-opacity: 0.4;\n}'
      }
    }
  },
  {
    style: {
      type: 'simple',
      properties: {
        stroke: {
          'size': {
            fixed: 2
          },
          'color': {
            fixed: '#000',
            opacity: 0.4
          }
        }
      }
    },
    result: {
      point: {
        cartocss: '#layer {\nmarker-line-width: 2;\nmarker-line-color: #000;\nmarker-line-opacity: 0.4;\n}'
      },
      line: {
        cartocss: '#layer {\nline-width: 2;\nline-color: #000;\nline-opacity: 0.4;\n}'
      },
      polygon: {
        cartocss: '#layer {\nline-width: 2;\nline-color: #000;\nline-opacity: 0.4;\n}'
      }
    }
  },
  {
    style: {
      type: 'simple',
      properties: {
        fill: {
          'color': {
            fixed: '#000',
            opacity: 0.4
          },
          'image': null
        },
        animated: {
          enabled: true,
          attribute: 'test',
          overlap: 'linear',
          duration: 30,
          steps: 256,
          resolution: 2,
          trails: 2
        }
      }
    },
    result: {
      point: {
        cartocss: 'Map {\n-torque-frame-count: 256;\n-torque-animation-duration: 30;\n-torque-time-attribute: "test";\n-torque-aggregation-function: "count(1)";\n-torque-resolution: 2;\n-torque-data-aggregation: linear;\n}#layer {\nmarker-fill: #000;\nmarker-fill-opacity: 0.4;\n}'
      },
      line: {
        cartocss: '#layer {\n}'
      },
      polygon: {
        cartocss: '#layer {\npolygon-fill: #000;\npolygon-opacity: 0.4;\n}'
      }
    }
  },
  {
    style: {
      type: 'simple',
      properties: {
        labels: {
          enabled: true,
          attribute: null,
          font: 'DejaVu Sans Book',
          fill: {
            'size': {
              fixed: 10
            },
            'color': {
              fixed: '#000',
              opacity: 1
            }
          },
          halo: {
            'size': {
              fixed: 1
            },
            'color': {
              fixed: '#111',
              opacity: 1
            }
          },
          offset: -10,
          overlap: true,
          placement: 'point'
        }
      }
    },
    result: {
      point: {
        cartocss: '#layer {\n}\n#layer::labels {\n}'
      },
      line: {
        cartocss: '#layer {\n}\n#layer::labels {\n}'
      },
      polygon: {
        cartocss: '#layer {\n}\n#layer::labels {\n}'
      }
    }
  },
  {
    style: {
      type: 'simple',
      properties: {
        labels: {
          enabled: true,
          attribute: 'test',
          font: 'DejaVu Sans Book',
          fill: {
            'size': {
              fixed: 10
            },
            'color': {
              fixed: '#000',
              opacity: 1
            }
          },
          halo: {
            'size': {
              fixed: 1
            },
            'color': {
              fixed: '#111',
              opacity: 1
            }
          },
          offset: -10,
          overlap: true,
          placement: 'point'
        }
      }
    },
    result: {
      point: {
        cartocss: "#layer {\n}\n#layer::labels {\ntext-name: [test];\ntext-face-name: 'DejaVu Sans Book';\ntext-size: 10;\ntext-fill: #000;\ntext-label-position-tolerance: 0;\ntext-halo-radius: 1;\ntext-halo-fill: #111;\ntext-dy: -10;\ntext-allow-overlap: true;\ntext-placement: point;\ntext-placement-type: dummy;\n}"
      },
      line: {
        cartocss: "#layer {\n}\n#layer::labels {\ntext-name: [test];\ntext-face-name: 'DejaVu Sans Book';\ntext-size: 10;\ntext-fill: #000;\ntext-label-position-tolerance: 0;\ntext-halo-radius: 1;\ntext-halo-fill: #111;\ntext-dy: -10;\ntext-allow-overlap: true;\ntext-placement: point;\ntext-placement-type: dummy;\n}"
      },
      polygon: {
        cartocss: "#layer {\n}\n#layer::labels {\ntext-name: [test];\ntext-face-name: 'DejaVu Sans Book';\ntext-size: 10;\ntext-fill: #000;\ntext-label-position-tolerance: 0;\ntext-halo-radius: 1;\ntext-halo-fill: #111;\ntext-dy: -10;\ntext-allow-overlap: true;\ntext-placement: point;\ntext-placement-type: dummy;\n}"
      }
    }
  },
  {
    style: {
      type: 'simple',
      properties: {
        fill: {
          size: {
            range: [1, 20],
            attribute: 'cartodb_id'
          },
          color: {
            range: 'colorbrewer(Greens)',
            attribute: 'test',
            bins: 6,
            operation: 'multiply',
            quantification: 'jenks',
            opacity: 0.5
          }
        }
      }
    },
    result: {
      point: {
        cartocss: '#layer {\nmarker-width: ramp([cartodb_id], 1, 20);\nmarker-fill: ramp([test], colorbrewer(Greens), 6, jenks);\nmarker-comp-op: multiply;\nmarker-fill-opacity: 0.5;\n}'
      },
      /*
      ,line: {
        cartocss: '#layer {\n}'
      },
      */
      polygon: {
        cartocss: '#layer {\npolygon-fill: ramp([test], colorbrewer(Greens), 6, jenks);\npolygon-comp-op: multiply;\npolygon-opacity: 0.5;\n}'
      }
    }
  },
  {
    style: {
      type: 'hexabins',
      aggregation: {
        aggr_size: {
          size: {
            fixed: 100
          },
          distance_unit: {
            fixed: 'meters'
          }
        },
        aggr_value: {
          operation: 'count',
          attribute: 'test'
        }
      },
      properties: {
        fill: {
          'color': {
            fixed: '#000',
            opacity: 0.4
          }
        }
      }
    },
    result: {
      point: {
        cartocss: '#layer {\npolygon-fill: #000;\npolygon-opacity: 0.4;\n}',
        sql: 'WITH hgrid AS (SELECT CDB_HexagonGrid(ST_Expand(!bbox!, greatest(!pixel_width!,!pixel_height!) * 100), greatest(!pixel_width!,!pixel_height!) * 100) as cell) SELECT hgrid.cell as the_geom_webmercator, count(1) as points_count, count(1)/power( 100 * CDB_XYZ_Resolution(CDB_ZoomFromScale(!scale_denominator!)), 2 ) as points_density, 1 as cartodb_id FROM hgrid, <%= sql %> i where ST_Intersects(i.the_geom_webmercator, hgrid.cell) GROUP BY hgrid.cell'
      }
    }
  },
  {
    style: {
      type: 'regions',
      aggregation: {
        aggr_dateset: 'adm0',
        aggr_value: {
          operation: 'sum',
          attribute: 'testing'
        }
      },
      properties: {
        fill: {
          'color': {
            fixed: '#000',
            opacity: 0.4
          }
        }
      }
    },
    /*result: {
      point: {
        cartocss: '#layer {\npolygon-fill: #000;\npolygon-opacity: 0.4;\n}',
        sql: 'SELECT _poly.*, _merge.point_agg FROM adm0 _poly, lateral (\nSELECT count(1) point_agg FROM (<%= sql %>) _point where ST_Contains(_poly.the_geom_webmercator, _point.the_geom_webmercator) ) _merge'
      }
    }*/
    result: {
      point: { 
        cartocss: '#layer {\npolygon-fill: #000;\npolygon-opacity: 0.4;\n}',
        sql: "SELECT _poly.*, _merge.point_agg FROM adm0 _poly, lateral (\nSELECT sum(testing) point_agg FROM (<%= sql %>) _point where ST_Contains(_poly.the_geom_webmercator, _point.the_geom_webmercator) ) _merge"
      }
    }
  },
  /*
{
  style: {
    type: 'squares',
    aggregation: {
      aggr_size: {
        size: {
          fixed: 100
        },
        distance_unit: {
          fixed: 'meters'
        }
      }
    },
    properties: {
      fill: {
        'color': {
          fixed: '#000',
          opacity: 0.4
        }
      }
    }
  },
  result: {
    point: { 
      cartocss: 'Map {\n-torque-frame-count: 256;\n-torque-animation-duration: 30;\n-torque-time-attribute: "test";\n-torque-aggregation-function: "count(1)";\n-torque-resolution: 2;\n-torque-data-aggregation: linear;\n}#layer {\nmarker-fill: #000;\nmarker-fill-opacity: 0.4;\n}'
    }
  }
}
*/
];
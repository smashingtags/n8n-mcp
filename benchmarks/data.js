window.BENCHMARK_DATA = {
  "lastUpdate": 1754182054781,
  "repoUrl": "https://github.com/smashingtags/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "035c4a349e848baa04b36f4bffdd47f7cad0325d",
          "message": "Merge pull request #121 from czlonkowski/fix/ci-skip-docs-only-changes\n\nfix: skip CI/CD workflows for documentation-only changes",
          "timestamp": "2025-08-02T22:57:58+02:00",
          "tree_id": "66a1b5b36de41b0594fb6e444df54baadb54bd06",
          "url": "https://github.com/smashingtags/n8n-mcp/commit/035c4a349e848baa04b36f4bffdd47f7cad0325d"
        },
        "date": 1754182054174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0189,
            "unit": "ms",
            "range": 0.3468,
            "extra": "52788 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1535,
            "unit": "ms",
            "range": 0.6131000000000002,
            "extra": "317 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.005,
            "unit": "ms",
            "range": 0.2697,
            "extra": "201332 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.072,
            "unit": "ms",
            "range": 0.44419999999999993,
            "extra": "13895 ops/sec"
          }
        ]
      }
    ]
  }
}
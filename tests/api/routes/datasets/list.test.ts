import { replaceTimestamps } from "@/tests/fixtures/replace-timestamps"
import { it, expect } from "bun:test"
import { getTestServer } from "tests/fixtures/get-test-server"

it("GET /datasets/list", async () => {
  const { ky } = await getTestServer()
  const res = await ky.get("datasets/list").json()

  expect(replaceTimestamps(res)).toMatchInlineSnapshot(`
{
  "datasets": [
    {
      "created_at": "[timestamp]",
      "dataset_id": "dataset-1",
      "dataset_name": "custom-keyboards",
      "dataset_name_with_owner": "testuser/custom-keyboards",
      "description_md": "A dataset of custom keyboards based on [this snippet](https://tscircuit.com/seveibar/keyboard-sample)",
      "max_layer_count": 2,
      "median_trace_count": 10,
      "owner_name": "testuser",
      "registry_account_id": "test-account-id",
      "sample_count": 3,
      "star_count": 0,
      "version": "1.0.0",
    },
    {
      "created_at": "[timestamp]",
      "dataset_id": "dataset-2",
      "dataset_name": "blinking-leds",
      "dataset_name_with_owner": "testuser/blinking-leds",
      "max_layer_count": 1,
      "median_trace_count": 5,
      "owner_name": "testuser",
      "registry_account_id": "test-account-id",
      "sample_count": 3,
      "star_count": 0,
      "version": "2.0.0",
    },
  ],
}
`)
})

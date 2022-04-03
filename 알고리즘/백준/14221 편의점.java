import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Main {
    public static final int INF = (int) 1e9; // 왜 무한을 의미하는 값으로 10억을 설정하는지
    public static int n, m;
    public static ArrayList<ArrayList<Node>> graph = new ArrayList<>();
    public static int[] d;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        for(int i = 0; i < n+1; i++) {
            graph.add(new ArrayList<>());
        }
        for(int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());
            int distance = Integer.parseInt(st.nextToken());
            graph.get(from).add(new Node(to, distance));
            graph.get(to).add(new Node(from, distance));
        }
        st = new StringTokenizer(br.readLine());
        int p = Integer.parseInt(st.nextToken());
        int q = Integer.parseInt(st.nextToken());
        int[] house = new int[p];
        int[] store = new int[q];
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < p; i++) {
            house[i] = Integer.parseInt(st.nextToken());
        }
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < q; i++) {
            store[i] = Integer.parseInt(st.nextToken());
        }

        int min = INF;
        int answer = 0;
        Arrays.sort(house);
        for(int i = 0; i < p; i++) {
            init();
            dijkstra(house[i]);
            for(int j = 0; j < q; j++) {
                if(d[store[j]] < min) {
                    min = d[store[j]];
                    answer = house[i];
                }
            }
        }
        System.out.println(answer);
    }

    static class Node implements Comparable<Node> {
        int nodeIndex;
        int distance;

        public Node(int nodeIndex, int distance) {
            this.nodeIndex = nodeIndex;
            this.distance = distance;
        }

        @Override
        public int compareTo(Node node) {
            if(this.distance > node.distance) return -1;
            else if(this.distance < node.distance) return 1;
            if(this.distance == node.distance)
                return this.nodeIndex > node.nodeIndex ? -1 : 1;
            return 0;
        }
    }

    public static void init() {
        d = new int[5001];
        Arrays.fill(d, INF);
    }

    public static void dijkstra(int start) {
        PriorityQueue<Node> pq = new PriorityQueue<>();
        d[start] = 0;
        pq.add(new Node(start, 0));
        while (!pq.isEmpty()) {
            int current = pq.peek().nodeIndex;
            int distance = pq.peek().distance;
            pq.poll();
            if(d[current] < distance) continue;
            for(int i = 0; i < graph.get(current).size(); i++) {
                int next = graph.get(current).get(i).nodeIndex;
                int nextDistance = distance + graph.get(current).get(i).distance;
                if(nextDistance < d[next]) {
                    d[next] = nextDistance;
                    pq.add(new Node(next, nextDistance));
                }
            }
        }
    }
}

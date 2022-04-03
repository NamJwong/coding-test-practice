import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    public static final int INF = (int) 1e9; // 왜 무한을 의미하는 값으로 10억을 설정하는지
    public static int n, m;
    public static ArrayList<ArrayList<Node>> graph = new ArrayList<>();
    public static boolean[] visited;
    public static int[] shortestTable;

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
                if(shortestTable[store[j]] < min) {
                    min = shortestTable[store[j]];
                    answer = house[i];
                }
            }
        }
        System.out.println(answer);
    }

    static class Node {
        int adjacent;
        int distance;

        public Node(int adjacent, int distance) {
            this.adjacent = adjacent;
            this.distance = distance;
        }
    }

    public static void init() {
        visited = new boolean[5001];
        shortestTable = new int[5001];
        Arrays.fill(shortestTable, INF);
    }

    public static int getShortestNode() {
        int minDistance = INF;
        int shortestNode = -1;
        for(int i = 1; i <= n; i++) {
            if(shortestTable[i] < minDistance && !visited[i]) {
                minDistance = shortestTable[i];
                shortestNode = i;
            }
        }
        return shortestNode;
    }

    public static void dijkstra(int startNode) {
        shortestTable[startNode] = 0;
        visited[startNode] = true;
        for(int i = 0; i < graph.get(startNode).size(); i++) {
            shortestTable[graph.get(startNode).get(i).adjacent] = graph.get(startNode).get(i).distance;
        }
        for(int i = 0; i < n - 1; i++) {
            int shortestNode = getShortestNode();
            visited[shortestNode] = true;
            for(int j = 0; j < graph.get(shortestNode).size(); j++) {
                int distance = shortestTable[shortestNode] + graph.get(shortestNode).get(j).distance;
                if(distance < shortestTable[graph.get(shortestNode).get(j).adjacent]) {
                    shortestTable[graph.get(shortestNode).get(j).adjacent] = distance;
                }
            }
        }
    }
}
